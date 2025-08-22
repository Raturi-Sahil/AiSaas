import sql from "../configs/db.js";


export const getUserCreations = async (req, res) => {
    try {
        const { user_id } = req.auth;
        const creations = await sql `SELECT * FROM cretions WHERE user_id=${user_id} ORDER BY created_at DESC`;
        res.json({success: true, creations});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export const getPublishedCerations = async (req, res) => {
    try {
        const creations = await sql `SELECT * FROM cretions WHERE publish = true ORDER BY created_at DESC`;
        res.json({success: true, creations});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}
export const toggleLikeCreation = async (req, res) => {
    try {
        const { user_id } = req.auth;
        const { id } = req.body;

        const [ creation ] = await sql `SELECT * FROM creations WHERE id = ${id}`

        if(!creation){
            return res.json({success: false, message: 'Creation not found'});
        }

        const currentLikes = creation.likes;
        const userIdStr = user_id.toString();
        let updatedLikes;
        let message;

        if(currentLikes.includes(user_id)) {
            updatedLikes = currentLikes.filter((user) => user != userIdStr);
            message = 'Creation Unliked';
        } else {
            updatedLikes = [...currentLikes, userIdStr];
            message = 'Creation Liked';
        }

        const formattedArray = `{${updatedLikes.json(',')}}`
        await sql `UPDATE creations SET likes = ${formattedArray}:: text[] WHERE id = ${id}`

        res.json({success: true, message});

    } catch (error) {
        res.json({success: false, message: error.message});
    }
}




