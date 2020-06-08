const instaTouch = require ('instatouch');
const express = require('express');
const app = express();
(async () => {
    try {
        const options = { count: 1505 };
        const comments = await instaTouch.comments('CA431lsBWO3', options);
        console.log(comments);
        res.send(comments);
    } catch (error) {
        console.log(error);
    }
})();