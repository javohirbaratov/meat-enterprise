import { Space, notification } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  pauseSound,
  playSound,
} from "../../../features/notification/notificationSlice";
import GrindNotificationSales from "./GrindNotificationSales";

function GrindNotification() {
  /* Notification */
  const [notificationApi, contextHolder] = notification.useNotification();

  /* Sound */
  const [soundPlay, setSoundPlay] = useState(false);

  /* Dispatch */
  const dispatch = useDispatch();

  /* Sound handle */
  useEffect(() => {
    if (soundPlay) {
      dispatch(playSound());
    } else {
      dispatch(pauseSound());
    }
  }, [dispatch, soundPlay]);

  return (
    <>
      {contextHolder}

      <Space size={16}>
        <GrindNotificationSales
          setSoundPlay={setSoundPlay}
          notificationApi={notificationApi}
        />
        {/* <GrindNotificationStorage
          setSoundPlay={setSoundPlay}
          notificationApi={notificationApi}
        /> */}
      </Space>
    </>
  );
}

export default GrindNotification;
