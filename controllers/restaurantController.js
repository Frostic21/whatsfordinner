module.exports.viewALl = function(req, res, next) {
    const restaurants =[ {
        id: 1,
        name: 'Pizza Hut',
        image: 'https://dynl.mktgcdn.com/p/d9AXTJEWMZ156q11dLLVRHsmufNu0K-ng4JYb_4WwRI/1900x1427.jpg',
        rating : 2,
        category : 'Italian',
        description : 'asldkfhasldf fjadskjj asdda fdss as asldkfhasldf fjadskjj asdda fdss as asldkfhasldf fjadskjj asdda fdss as'
    },
    {   id: 2,
        name: 'Not Pizza Hut',
        image: 'https://dynl.mktgcdn.com/p/d9AXTJEWMZ156q11dLLVRHsmufNu0K-ng4JYb_4WwRI/1900x1427.jpg',
        rating : 4,
        category : 'Italian',
        description : 'asldkfhasldf fjadskjj asdda fdss as asldkfhasldf fjadskjj asdda fdss as asldkfhasldf fjadskjj asdda fdss as'
    }];
    res.render('index', {restaurants});
}