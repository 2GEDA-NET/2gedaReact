const baseURL = "https://king-prawn-app-venn6.ondigitalocean.app";

export const submitFormData = async (formData) => {
  const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
//   myHeaders.append(
//     "Cookie",
//     "__cf_bm=oS1dmDeDMkQpDAPnlYg28Ix3zAE6SZbWA.1_IWkWXJw-1701779685-0-AfxEpp6d9SR7CMo1RCgu8/uDjkq3F/XguwuQK8Z13CXc1XP9eFdnCnLnzNRBySwPokOEN0xgG4Q0pfx7xyVLv74=; csrftoken=0tQF8jDzX38l95IB6wx5xqAxebxqHdM2; sessionid=si1y25m97ctl3faemkc2aby35ejiti6x"
//   );

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(formData),
    credentials: 'include', 
    redirect: "follow",
  };

  try {
    const response = await fetch(`${baseURL}/api/form-submit`, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Error submitting form: ${error.message}`);
  }
};
