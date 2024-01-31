<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Resources\Person\Resource;
use App\Models\Person;

class IndexController extends Controller
{
    public function index()
    {
        $persons = Person::all();
        return Resource::collection($persons);
    }
}
