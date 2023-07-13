const NotificationPlugin = {
  install(Vue) {
    Vue.prototype.$sendNotification = function (message, duration) {
      const notificationElement = document.createElement("div");
      notificationElement.textContent = message;
      notificationElement.classList.add("notification");
      notificationElement.style.backgroundColor = "red";
      notificationElement.style.color = "#333";
      notificationElement.style.padding = "10px";
      notificationElement.style.position = "fixed";

      document.getElementById("app").appendChild(notificationElement);

      setTimeout(() => {
        document.getElementById("app").removeChild(notificationElement);
      }, duration);
    };
  },
};

export default NotificationPlugin;
