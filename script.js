function pyramid(numHashtags, totalHeight){
    var result = ''
    
    for (var spaces = totalHeight - numHashtags; spaces >= 0; spaces--){
        result += " "
    }
    for(var hashtag = 1; hashtag < numHashtags; hashtag++){
        result += "#"
    }
    
    result += "  "


    for(var hashtag = 1; hashtag < numHashtags; hashtag++){
        result += "#"
    }
    console.log(result)
}

var totalHeight = 5

for(var hashtag = 1; hashtag <= totalHeight; hashtag++){
    pyramid(hashtag, totalHeight)
    }
//for( var spaces = 0; spaces <= totalHeight; spaces++)
//for(var spaces = totalHeight - numHashtags; spaces >= 0; spaces--)