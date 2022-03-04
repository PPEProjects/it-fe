import { notification } from 'antd';

import { BsFillInfoCircleFill } from 'react-icons/bs';

const error = (description, isTitle = true) => {
  if (isTitle)
    return notification['error']({
      icon: <BsFillInfoCircleFill className="text-xl text-blue-500" />,
      description,
    });
};

const success = description => {
  notification['success']({
    message: `Success`,
    description,
  });
};

export { error, success };
