 // Task 1
 // Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.

 const goods = new Goods('Knife', 200)
 console.log(goods)

 //Task 2.
 //  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

 /** Добавил свойства. (папка classes, файл Goods.js) **/
 
 //Task 3.
 //  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).


 /** Добавил метод. (папка classes, файл Goods.js) **/

 // Task 4.
 // Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

 const good2 = new Goods('Knife', 200, 'img/1.png',15, '.out-4')
 good2.draw()

 //Task 5.
 // Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.

 /** Унаследовал класс. (папка classes, файл Goods2.js) **/

 // Task 6.
 // Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.

 const good3 = new Goods2('Cup', 150, 'img/2.png',11, '.out-6',true)
 good3.draw()

 // Task 7.
 // Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.

 /** Создал класс. (папка classes, файл Valid.js) **/
 
 //Task 8.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.

 const valid1 = new Valid('www@www.com', '12345')
 valid1.validate()
 console.log('Task_8 ',valid1.isValid)
 //Task 9.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.

 const valid11 = new Valid('www@www.com', '1234567')
 valid11.validate()
 console.log('Task_9 ',valid11.isValid)

 //Task 10.
 // Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.

 /** Унаследовал класс. (папка classes, файл Valid2.js) **/
 
 //Task 11.
 // Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

 const valid2 = new Valid2('', '12345678',)
 valid2.validate()
 console.log('Task_11 ', valid2);

 //Task 12.
 // Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

 const valid3 = new Valid2('www@22.com', '12345678',)
 valid3.validate()
 console.log('Task_12 ', valid3);
