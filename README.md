Logica api di invio mail:

Route::post('/mail-submit', [PublicController::class, 'submitMail']);

 public function submitMail(Request $request)
    {
        $dati = $request->validate([
            'subject' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);
        try {
            Mail::to('tua_email@esempio.com')->send(new ContactMeNextJsMail($dati));
            // Mail::to('admin@mail.it')->send(new ContactMeNextJsMail());
            return response()->json(['message' => 'Email inviata con successo!'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to send email. ' . $e->getMessage()], 500);
        }
    }