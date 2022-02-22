import React, {useEffect, useState} from "react";
import {Input, Select} from "antd";

const {Option} = Select

const CurrencyItem = ({onChange, value}) => {
    console.log('onChange, value', {onChange, value})
    const [price, setPrice] = useState(value)
    useEffect(() => {
console.log('price', price)
        onChange(price)
    }, [price])

    return (
        <div className="!mb-0 space-x-3" name="budget_iso_code">
            <Input className="!rounded !w-[70%]" placeholder="$ 0.00"
                   onChange={(e) => setPrice({...price, amount: e.target.value})}
            />

            <Select className="!rounded !w-[30%]" defaultValue="USD"
                    onChange={(val) => {
                        console.log('val', val)
                        return setPrice({...price, currency: val})
                    }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </div>
    )
};

export default CurrencyItem;
