<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Requests\Person\UpdateRequest;
use App\Http\Resources\Person\Resource;
use App\Models\Person;

class UpdateController extends Controller
{
    public function index(UpdateRequest $request, Person $person)
    {
        $data = $request->validated();
        $person->update($data);
        return new Resource($person);
    }
}
