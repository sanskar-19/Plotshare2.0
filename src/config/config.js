import config from "react-global-configuration";
const base_url = "http://127.0.0.1:3001";
config.set({
  GetProperties: `${base_url}/properties`,
});
export default config;
