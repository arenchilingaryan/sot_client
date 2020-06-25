import React from 'react'
import { Select } from 'antd'
import { ISelect } from '../../interfaces/interfaces';

type SelectProps = {
    select: ISelect[]
    setParam: (value: string) => void
}

export const SelectMenu: React.FC<SelectProps> = (props) => {

    const { Option } = Select;

    const handleChange = (value: string) => {
        props.setParam(value)
    }

    return (
        <div>
            <Select defaultValue="Select Genre" style={{ width: 200 }} onChange={handleChange}>
                {
                    props.select.map(el => {
                        return (
                            <Option key={el.id + el.title} value={el.title}> {el.title}</Option>
                        )
                    })
                }
            </Select>
        </div>
    )
}
