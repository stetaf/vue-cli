<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-5">
                <div class="card mt-4">
                    <div class="card-header">
                        <h1>Register</h1>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputNmail1">Full name</label>
                                <input type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter your full name">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
  export default {
    name: 'Register'
  }
</script>

<style scoped lang="scss">

</style>
