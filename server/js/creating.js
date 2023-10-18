var evento =await fetch(`../../players/log/event.json`)
                    .then((response) => response.json())
                                                .then((json) => {
                                                    var conteudinho = json;
                                                    return conteudinho});

console.log(evento);