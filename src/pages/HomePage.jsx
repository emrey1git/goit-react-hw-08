const HomePage = () => {
  const styles = {
    container: {
      textAlign: "center",
      marginTop: "100px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    title: {
      fontSize: "36px",
      color: "#2c3e50",
    },
    subtitle: {
      fontSize: "18px",
      color: "#7f8c8d",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Phonebook App!</h1>
      <p style={styles.subtitle}>Manage your contacts with ease 🚀</p>
    </div>
  );
};

export default HomePage;
