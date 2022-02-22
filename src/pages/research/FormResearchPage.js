import {Button, Form} from "antd";
import CurrencyItem from "../../components/CurrencyItem";

const FormResearchPage = () => {
    return (
        <Form
            // onFinishFailed={(values) => {
            //     existsAuth();
            // }}
            onFinish={(values) => {
                console.log('onFinish values', values)
                // existsAuth();
                // dispatch(authForgotPassword(values));
            }}
        >
            <Form.Item name={"gia-tien"}>
                <CurrencyItem/>
            </Form.Item>
            <Form.Item>
                <Button htmlType={"submit"}>Submit</Button>
            </Form.Item>
        </Form>
    )
}
export default FormResearchPage