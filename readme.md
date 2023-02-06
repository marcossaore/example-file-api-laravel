# Install and run

- npm i
- npm start

`SERVER EXAMPLE LARAVEL API`

```php
    Route::post('/test', function (Request $request) {
        $file = $request->file('image');
        Storage::disk('local')->put('myfile.jpg', $file->get());
        return response()->json(['status' => 'ok']);
    });
```