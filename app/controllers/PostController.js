const fs = require('fs');
// Đọc file posts.json
let rawdata = fs.readFileSync('data/posts.json');
// Chuyển thành object
let posts = JSON.parse(rawdata);
class PostController {
    // [GET] /
    getAllPost(req, res) {
        res.status(200).json(posts);
    };
    // [GET] /:id
    getPostById(req, res) {
        let post = posts.find(({ id }) => id == req.params.id);
        res.status(200).json(post);
    };
    // [PUT] /:id
    updatePost(req, res) {
        /* 
            Có thể sử dụng syntax của từng loại db update
            Ở đây em chỉ update kiểu đơn giản và không thay đổi dữ liệu trong file posts.json
        */
        posts.map(post => {
            if (post.id == req.params.id) {
                // các trường cần update
                // demo
                post.title = req.body.title;

            }
        });
        // Trả về code 200 khi update thành công và lists data ( nều cần)
        res.status(200).json(posts);
    };
    //[DELETE] /:id
    deletePost(req, res) {
        /*
            Em chỉ xoá tạm thời trong biết posts.
            Nếu anh/chị muốn em vẫn có thể xoá tuyệt đối.
        */
        posts = posts.filter(post => {
            return post.id != req.params.id
        });
        console.log(posts);
        res.status(200).json(posts);
    };
    // [POST] /
    postPost(req, res) {
        let data = req.body;
        posts.push(req.body);
        // Trả về code 200 khi post thành công và lists data ( nều cần)
        res.status(200).json(posts);
    };
}
module.exports = new PostController();
