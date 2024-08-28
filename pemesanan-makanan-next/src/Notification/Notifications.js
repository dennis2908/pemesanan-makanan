import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import Router from 'next/router'

const pusher = new Pusher("09df08f24c6a096e7086", {
  cluster: "ap1"
});

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const channel = pusher.subscribe("channel-dmd");

    channel.bind("dmd", data => {
      Router.reload(window.location.pathname);
    });

    return () => {
      pusher.unsubscribe("channel-dmd");
    
    };
  }, [notifications]);

  return "";
};

export default Notifications;
