1. Tipagem estática é quando o desenvolvedor especifíca o tipo da variável , ja a dinâmica , o dev não diz o tipo e o próprio type script infere o tipo da variável

2. Você não consegue previnir-se de erros em tempo de compilação , apenas em tempo de execução .Outro problema é a segurança.

3. function Aluno(nome: any), nesse exemplo , o usúario pode colocar qualquer tipo de dado , e o erro so sera percebido quando executado , diferentemente se o tipo tivesse sido passado adequadamente

4. Pois em C é possivel realizar operações entre variáveis de tipos diferentes , como por exemplo ;
int x = 5;
float y = 2.0;
float resultado = x + y;
printf("%df", resultado) //Será printado um 7.0
Isso não seria possivel em typescript , pois não é permitido realizar operações com variáveis de tipos diferentes.

5. Não , pois apesar de TypeScript aceitar int e float para number , ele não permite operações com variáveis de tipos diferentes , como por exemplo , number e string
