export const toastStyleObject = () => {
  const isMobile = window.innerWidth <= 600;

  return {
    position: isMobile ? "top-center" : "bottom-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",

    style: {
      fontFamily: "AndaleMono",
      background: "rgba(20, 20, 20, 0.65)",
      color: "#f5f5f5",
      fontSize: "12px",
      letterSpacing: "5px",

      width: isMobile ? "50vw" : "90vw",
      maxWidth: "320px",

      padding: "14px 18px",
      borderRadius: "14px",

      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",

      border: "1px solid rgba(255, 255, 255, 0.08)",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  };
};
