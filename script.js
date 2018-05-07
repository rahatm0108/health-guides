    $(function() {
      $('button').click(function() {
        var improve = $('#improvement').val();
        console.log(power);
        var name = $('#realName').val();
        
        var health = $('input[name=player]:checked').val();
        console.log(health);
        
        if (health == "physical") {
          var goal = "You were once a human named " + name + " but after you've died those on Planet Namek reicarnated you into as "  + " a namekian of the warrior clan. You must work to raise " + improve + " power level in time before Freiza arrive to blow up the planet";
          $('p').html(goal).css('color', 'green');
          
        }
        if (health == "mental") {
          var goal = "You were one of the greatest martial artist alive a human named " + name + " many know you as " + " a human with many unheard of techiques. You use your " + improve + " power level to help those in need";
          $('p').html(goal).css('color', 'black');
        
        }      
    });
    });