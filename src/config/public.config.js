module.exports = function getPublicRuntimeConfig() {
  const CONFIG_BOILERPLATE = {
    nodeEnv: "test",
    branch: "GrowthRoute",
    whatsAppApi: "https://api.whatsapp.com",
    whatsAppWeb: "https://web.whatsapp.com",
    telephone: "(11) 1234-5123",
    email: "email@email.com",
    imgBaseUrl: "https://content.teste.com/",
    siteUrl: "https://growth-route-web-83ntnr8tp.now.sh/"
  };

  if (process.env.NODE_ENV === "test") {
    return CONFIG_BOILERPLATE;
  }

  if (process.env.NODE_ENV === "development") {
    return { ...CONFIG_BOILERPLATE, nodeEnv: "development" };
  }

  if (
    process.env.NODE_ENV === "production" &&
    process.env.CONFIG === "staging"
  ) {
    return { ...CONFIG_BOILERPLATE, nodeEnv: "staging" };
  }

  if (
    process.env.NODE_ENV === "production" &&
    process.env.CONFIG === "production"
  ) {
    return {
      ...CONFIG_BOILERPLATE,
      nodeEnv: "production",
      siteUrl: "https://www.growthroute.com.br"
    };
  }

  throw new Error(
    ["NODE_ENV: " + process.env.NODE_ENV, "CONFIG: " + process.env.CONFIG].join(
      ". "
    )
  );
};
