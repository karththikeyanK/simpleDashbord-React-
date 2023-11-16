import React from "react"
import { Space, Table, Tag } from "antd"
const { Column, ColumnGroup } = Table

 const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  // Additional objects to make a total of 10
  {
    key: "4",
    firstName: "Emily",
    lastName: "White",
    age: 28,
    address: "Paris No. 1 Lake Park",
    tags: ["friendly", "artist"],
  },
  {
    key: "5",
    firstName: "Sarah",
    lastName: "Johnson",
    age: 35,
    address: "Berlin No. 1 Lake Park",
    tags: ["ambitious", "manager"],
  },
  {
    key: "6",
    firstName: "David",
    lastName: "Miller",
    age: 40,
    address: "Tokyo No. 1 Lake Park",
    tags: ["funny", "engineer"],
  },
  {
    key: "7",
    firstName: "Sophia",
    lastName: "Anderson",
    age: 27,
    address: "Toronto No. 1 Lake Park",
    tags: ["smart", "doctor"],
  },
  {
    key: "8",
    firstName: "Daniel",
    lastName: "Clark",
    age: 30,
    address: "Melbourne No. 1 Lake Park",
    tags: ["analytical", "scientist"],
  },
  {
    key: "9",
    firstName: "Olivia",
    lastName: "Wilson",
    age: 29,
    address: "Madrid No. 1 Lake Park",
    tags: ["creative", "designer"],
  },
  {
    key: "10",
    firstName: "Liam",
    lastName: "Martinez",
    age: 33,
    address: "Rome No. 1 Lake Park",
    tags: ["energetic", "architect"],
  },
];


const Timetable = () => (
  <Table dataSource={data} style={{width:"80%"}}>
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
)
export default Timetable;
