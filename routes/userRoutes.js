const express = require("express");
const router = express.Router();
const User = require("../models/user"); // Import User model

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     description: Deletes a user from the database using the provided ID.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.destroy();
    res.status(200).json({ message: "✅ User deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
