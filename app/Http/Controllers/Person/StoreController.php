<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Requests\Person\StoreRequest;
use App\Http\Resources\Person\Resource;
use App\Models\Person;
use Illuminate\Http\Response;

class StoreController extends Controller
{
    public function index(StoreRequest $request)
    {
        $data = $request->validated();
        $person = Person::create($data);
        return Response::HTTP_OK;
    }
}
