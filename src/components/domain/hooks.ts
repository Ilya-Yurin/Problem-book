import React, { useEffect } from 'react';
import { showErrorNotification } from "utils/notifications";


export const useErrorNotification = (error: string | null) => {
  useEffect(() => {
    if (error) {
      showErrorNotification('Ошибка', error);
    }
  }, [error]);
};
