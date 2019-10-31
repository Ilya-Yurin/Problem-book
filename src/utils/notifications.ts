import { notification } from 'antd';

notification.config({
  duration: 2
});

export type NotificationType = 'error' | 'success';

const showNotification = (type: NotificationType, message: string, description: string) => {
  notification[type]({
    message: message,
    description: description,
  });
};

export const showErrorNotification = (message: string, description: string) => {
  showNotification('error', message, description);
};

export const showSuccessNotification = (message: string, description: string) => {
  showNotification('success', message, description);
};