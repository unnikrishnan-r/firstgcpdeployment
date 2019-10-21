exports.envVar = (req, res) => {
    // Sends 'bar' as response
    console.log("bbbccc");
    console.log(process.env.JAWSDB_URL);
    res.send(process.env.JAWSDB_URL);
    return process.env.JAWSDB_URL;
  };
  