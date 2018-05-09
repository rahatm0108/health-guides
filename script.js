  $(function() {

      $('button').click(function() {
        var power = $('#improvement').val();
        console.log(power);
        var name = $('#realName').val();

        var health = $('input[name=player]:checked').val();
        console.log(health);
        if (health == "mental") {
          var dream = "Hello there " + name + " you decided to work on your mental health with the goal of" + power + ". Goodluck on your journey of self-improvement";
          $('p2').html(dream).css('color', 'blue');
        
        }
        if (health== "physical") {
          var dream = "Hi there " + name + " you decided to work on your physical health with the goal of "+power;
          $('p2').html(dream).css('color', 'green');
          
        }
      });
    });