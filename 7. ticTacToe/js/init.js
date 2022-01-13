var counter = document.querySelector("#counter");

window.onload = () => {
    
    for(let i = 0; i < 9; i++)
    {
        CreateGrid(i);
    }

    document.querySelector("#restart").addEventListener('click', () => {
        document.location.reload();
    });
    document.querySelector("#play-again-btn").addEventListener('click', () => {
        document.location.reload();
    })

}

const CreateGrid = (i) =>
{
    var grid_tile = document.createElement('div');
    
    grid_tile.id = i;
    grid_tile.className = "grid-tile";

    grid_tile.addEventListener('click', () => {    

        if(counter.innerHTML % 2 == 0)
        {
            if(grid_tile.innerText != "X")
            {
                grid_tile.innerText = "X";
            }
            else
            grid_tile.innerText = "O";

        }
        else
        {
            if(grid_tile.innerText != "O")
            {
                grid_tile.innerText = "O";
            }
            else
            grid_tile.innerText = "X";
            
        } 

        if(counter.innerHTML >= 3)
        {
            CheckWinner();
        }

        counter.innerHTML++;
    });
    
    document.querySelector("#grid-box").appendChild(grid_tile);

}

const CheckWinner = () => {

    var tile_array = Array.from(document.getElementsByClassName('grid-tile'));
    
    var check_winner = [];

    tile_array.forEach(element => {

        check_winner.push(element.innerText);
    });

    var winner = "";

    if(check_winner[0] == "X" && check_winner[1] == "X" && check_winner[2] == "X")
    {
        winner = "X";
    }
    if(check_winner[3] == "X" && check_winner[4] == "X" && check_winner[5] == "X")
    {
        winner = "X";
    }
    if(check_winner[6] == "X" && check_winner[7] == "X" && check_winner[8] == "X")
    {
        winner = "X";
    }
    if(check_winner[0] == "X" && check_winner[1] == "X" && check_winner[2] == "X")
    {
        winner = "X";
    }
    if(check_winner[0] == "X" && check_winner[3] == "X" && check_winner[6] == "X")
    {
        winner = "X";
    }
    if(check_winner[1] == "X" && check_winner[4] == "X" && check_winner[7] == "X")
    {
        winner = "X";
    }
    if(check_winner[2] == "X" && check_winner[5] == "X" && check_winner[8] == "X")
    {
        winner = "X";
    }
    if(check_winner[0] == "X" && check_winner[4] == "X" && check_winner[8] == "X")
    {
        winner = "X";
    }
    if(check_winner[2] == "X" && check_winner[4] == "X" && check_winner[6] == "X")
    {
        winner = "X";
    }
    //----------------------------------------------------------------------------
    if(check_winner[0] == "O" && check_winner[1] == "O" && check_winner[2] == "O")
    {
        winner = "O";
    }
    if(check_winner[3] == "O" && check_winner[4] == "O" && check_winner[5] == "O")
    {
        winner = "O";
    }
    if(check_winner[6] == "O" && check_winner[7] == "O" && check_winner[8] == "O")
    {
        winner = "O";
    }
    if(check_winner[0] == "O" && check_winner[1] == "O" && check_winner[2] == "O")
    {
        winner = "O";
    }
    if(check_winner[0] == "O" && check_winner[3] == "O" && check_winner[6] == "O")
    {
        winner = "O";
    }
    if(check_winner[1] == "O" && check_winner[4] == "O" && check_winner[7] == "O")
    {
        winner = "O";
    }
    if(check_winner[2] == "O" && check_winner[5] == "O" && check_winner[8] == "O")
    {
        winner = "O";
    }
    if(check_winner[0] == "O" && check_winner[4] == "O" && check_winner[8] == "O")
    {
        winner = "O";
    }
    if(check_winner[2] == "O" && check_winner[4] == "O" && check_winner[6] == "O")
    {
        winner = "O";
    }

    if(winner != "")
    {
        document.querySelector("#player").innerText = winner;
        document.querySelector("#result").style.display = "block";
        document.querySelector("#play-again").style.display = "block";
    }
}

