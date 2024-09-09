module.exports = function (jwt) {
	return {
		authentication: function (req, res, next) {
			var bearer = req.headers["authorization"];
			if (bearer) {
				var array = bearer.split(" ");
				var token = array[1];
				jwt.verify(token, '_id',function (err, decoded) {
					if (err) {
						return res.status(403).json({ success: false, message: "Falha na autenticação do token." });
					} else {
						req.decoded = decoded;

						req.user = { company: req.decoded.company, id: req.decoded._id, email: req.decoded.email };

						res.set({ "content-type": "application/json; charset=utf-8" });

						next();
					}
				});
			} else {
				return res.status(403).json({ success: false, message: "Nenhum token fornecido." });
			}
		}
	};
};