import { notification as antd_notification } from "antd";

const warning = (description, isTitle = true) => {
  if (isTitle)
    return antd_notification["warning"]({
      message: `Warning`,
      description,
    });
  return antd_notification["warning"]({
    icon: <img alt="" className="w-8" src="/assets/icon/2-infor-icon.png" />,
    description,
  });
};

const info = (description) => {
  antd_notification["info"]({
    message: ``,
    description,
  });
};

const error = (description, isTitle = true) => {
  if (isTitle)
    return antd_notification["error"]({
      icon: (
        <img
          className="w-8 -mt-1.5"
          src="/assets/icon/information.png"
          alt=""
        />
      ),
      description,
    });
};

const success = (description) => {
  antd_notification["success"]({
    message: `Success`,
    description,
  });
};

export { warning, error, success, info };
