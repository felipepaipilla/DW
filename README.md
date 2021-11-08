# DW
DigitalWare

Para ejecutar de manera local:

1. Ejecutar los scripts en el orden indicado en la carpeta src\db\configuration
2. Desde VS abrir la solución que se encuentra en la ruta src\services\DwSolution y ejecutar desde el proyecto API. El "ConnectionString" se puede configurar en appsettings.Development.json, por defecto es: "Data Source=.\\SQLEXPRESS;Initial Catalog=DwInvoiceDb;Integrated Security=True;"
3. Desde el directorio src\app\InvoiceAppDemo ejecutar el proyecto de angular 
