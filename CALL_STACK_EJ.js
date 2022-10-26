const cortar = (ingrediente) => {
    //------ DESPUES ENTRANDO A ESTA CONST PARA MOSTRAR EL PARAMETRO EN LA CONSOLA
    console.log('Cortar ' + ingrediente);
  }
  // DESPUES DE HABER TERMINADO LA FUNCION DE ENSALADA MIXTA EENTRA ESTA FUNCION
  ///------- APILANDOLA EN EL CALL STACK PARA MESCLAR LOS INGREDIENTES
  function mezclarIngredientes(n) {
    if (n <= 0) return;
  
    console.log('Mezclar #' + n);
    mezclarIngredientes(n - 1);
  }
  
  function comer() {
    console.log('Comer');
  }
  //LO PRIMERO QUE HACE ES ENTRAR A ESTA FUNCION LLAMADA hacerEnsaladaMixta
  //------ENTRANDO EN LA FUNCION CORTAR PASANDOLE EL PARAMETRO DENTRO DEL PARENTESIS
  function hacerEnsaladaMixta() {
    cortar('tomate');
    //-----AL TERMINAR EL PARAMETRO DE CORTAR ENTRA EL SIGUIENTE PARAMETRO DE CORTAR SUMANDOLE 1
    cortar('lechuga');
    cortar('cebolla');
    mezclarIngredientes(5);
    comer();
  }
  
  hacerEnsaladaMixta();