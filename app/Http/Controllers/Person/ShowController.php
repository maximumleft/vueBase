<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Resources\Person\Resource;
use App\Models\Person;

class ShowController extends Controller
{
    public function index(Person $person)
    {
        return new Resource($person);
    }
}
