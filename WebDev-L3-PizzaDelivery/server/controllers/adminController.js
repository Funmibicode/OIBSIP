export const getAdminTest = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Admin authorization successful.",
    admin: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
    },
  });
};