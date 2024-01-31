<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Response;

class DeleteController extends Controller
{
    public function index(Person $person)
    {
        $person->delete();
        return Response::HTTP_OK;
    }
}
