
var filmes = ["Titanic", "O Senhor dos Anéis", "Matrix", "O Poderoso Chefão", "Interestelar", "Pantera Negra"];

        function exibirFilmes() {
            document.getElementById('filmesContainer').style.display = 'block';
            document.getElementById('loginContainer').style.display = 'none';

            var filmesList = document.getElementById('filmesList');
            filmesList.innerHTML = '';

            filmes.forEach(function(filme) {
                var li = document.createElement('li');
                li.textContent = filme;
                filmesList.appendChild(li);
            });
        }

        function exibirLogin() {
            document.getElementById('loginContainer').style.display = 'block';
            document.getElementById('filmesContainer').style.display = 'none';

            document.getElementById('mensagem').textContent = ''; 
        }

        // Verificação de login
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var mensagem = document.getElementById('mensagem');

            if (username === 'ADM' && password === 'ADM') {
                mensagem.textContent = "Bem-vindo!";
            } else {
                mensagem.textContent = "Incorreto. Tente novamente.";
            }
        });

