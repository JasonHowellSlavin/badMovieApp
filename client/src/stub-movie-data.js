const stubMovieData = [
    {
        id: 1,
        title: 'Bad Movie 1', // varchar(127)
        description: 'Some sort of description here, maybe not too long, but not long enough to make issues', //varchar(255)
        haveCopy: true, // boole
        copyFormat: 'VHS', //enum
        voteCount: 0, // num
        comments: [
            {subject: 'This movie rules', comment: 'I love this movie cause it is soooo bad', user: 'KoiBoy', date: 'somedate'},
            {subject: 'This movie sucks', comment: 'Its just bad, not so bad it is good', user: 'MrFrapo', date: 'somedate'},
        ],
        submitedBy: 'MrFrapo',
        userIP: '120.0.0.1'
    },
    {
        id: 2,
        title: 'Bad Movie 2', // varchar(127)
        description: 'Some sort of description here, maybe not too long, but not long enough to make issues', //varchar(255)
        haveCopy: true, // boole
        copyFormat: 'VHS', //enum
        voteCount: 0, // num
        comments: [
            {subject: 'This movie rules', comment: 'I love this movie cause it is soooo bad', user: 'KoiBoy', date: 'somedate'},
            {subject: 'This movie sucks', comment: 'Its just bad, not so bad it is good', user: 'MrFrapo', date: 'somedate'},
        ],
        submitedBy: 'MrFrapo',
        userIP: '120.0.0.1'
    },
    {
        id: 3,
        title: 'Bad Movie 3', // varchar(127)
        description: 'Some sort of description here', //varchar(255)
        haveCopy: true, // boole
        copyFormat: 'VHS', //enum
        voteCount: 0, // num
        comments: [
            {subject: 'This movie rules', comment: 'I love this movie cause it is soooo bad', user: 'KoiBoy', date: 'somedate'},
            {subject: 'This movie sucks', comment: 'Its just bad, not so bad it is good', user: 'MrFrapo', date: 'somedate'},
        ],
        submitedBy: 'MrFrapo',
        userIP: '120.0.0.1'
    },
    {
        id: 4,
        title: 'Bad Movie 4', // varchar(127)
        description: 'Some sort of description here, maybe not too long, but not long enough to make issues', //varchar(255)
        haveCopy: true, // boole
        copyFormat: 'VHS', //enum
        voteCount: 0, // num
        comments: [
            {subject: 'This movie rules', comment: 'I love this movie cause it is soooo bad', user: 'KoiBoy', date: 'somedate'},
            {subject: 'This movie sucks', comment: 'Its just bad, not so bad it is good', user: 'MrFrapo', date: 'somedate'},
        ],
        submitedBy: 'MrFrapo',
        userIP: '120.0.0.1'
    },
    {
        id: 5,
        title: 'Bad Movie 5', // varchar(127)
        description: 'Some sort of description here, maybe not too long, but not long enough to make issues', //varchar(255)
        haveCopy: true, // boole
        copyFormat: 'VHS', //enum
        voteCount: 0, // num
        comments: [
            {subject: 'This movie rules', comment: 'I love this movie cause it is soooo bad', user: 'KoiBoy', date: 'somedate'},
            {subject: 'This movie sucks', comment: 'Its just bad, not so bad it is good', user: 'MrFrapo', date: 'somedate'},
        ],
        submitedBy: 'MrFrapo',
        userIP: '120.0.0.1'
    }
];

export default stubMovieData;
