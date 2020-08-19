import React from 'react';
import { Tabs, List } from "antd";
import gql from 'graphql-tag';
import { withQuery, withMutation } from '../utils'

const {TabPane} = Tabs;
const list = [{
	key: '1',
	value: '全部'
}, {
	key: '2',
	value: '未完成'
}, {
	key: '3',
	value: '已完成'
}];
const GET_LAYOUT_NAV = gql`
    query target{
		    nav @client
        todoList{
            _id
            content
            completed
        }
    }
`;
const CHANGE_NAV = gql`
    mutation ChangeNav($key: String!) {
        changeNav(key: $key) @client
    }
`;

const Content = props => {
	const {query = {}, mutation: changeNav} = props;
	const { data = {} } = query;
	let { nav = '', todoList = []} = data;
	todoList = todoList.filter(item => {
		if (nav === '2') {
			return item.completed === false
		} else if (nav === '3') {
			return item.completed === true
		}
		return true;
	})
	return (
		<Tabs activeKey={nav} onChange={key => changeNav({variables: {key}})}>
			{list.map(item => (
				<TabPane key={item.key} tab={item.value}>
					<List
						bordered
						dataSource={todoList}
						renderItem={item => <List.Item>{item.content}</List.Item>}
					/>
				</TabPane>
			))}
		</Tabs>
	)
}

let WrapComponent = Content;
WrapComponent = withMutation({
	Component: WrapComponent,
	mutation: CHANGE_NAV,
})
WrapComponent = withQuery({
	Component: WrapComponent,
	query: GET_LAYOUT_NAV,
});


export default WrapComponent;