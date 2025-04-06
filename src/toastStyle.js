export const toastStyleObject = () => {
  const isMobile = window.innerWidth <= 600;

  return {
    position: isMobile ? "top-left" : "bottom-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    style: {
      fontFamily: "AndaleMono",
      backgroundColor: "smoke",
      color: "white",
      fontSize: "12px",
      width: isMobile ? "65%" : "auto",
      height: "auto",
      padding: isMobile ? null : "2rem",
      marginTop: isMobile ? "3rem" : null,
      marginLeft: isMobile ? "1rem" : null,
      borderRadius: isMobile ? "1rem" : null,
    },
  };
};
