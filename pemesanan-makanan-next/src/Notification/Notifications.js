import React, { useState, useContext, useEffect } from 'react';
import Pusher from 'pusher-js';
import Router from 'next/router'

import {appContext} from './Context'


const pusher = new Pusher("09df08f24c6a096e7086", {
  cluster: "ap1"
});

const Notifications = ({onDataFromChild}) => {
  const [notifications] = useState([]);
  const context = useContext(appContext);


  useEffect(() => {
    const channel = pusher.subscribe("channel-dmd");

    channel.bind("dmd", data => {
      onDataFromChild("true")
      // Router.reload(window.location.pathname);
    });

    return () => {
      pusher.unsubscribe("channel-dmd");
    
    };
  }, [notifications]);

  return "";
};

export default Notifications;
