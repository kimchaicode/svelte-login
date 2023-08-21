<script>
    let showForm = false;

    function handleClick() {
        showForm = !showForm;
    }
</script>

<nav>
    <button on:click={handleClick} type="button">
        <img alt="Avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0m5Cy4lXCbuyG54L0vuo3i5-ALavHe9KmhWA_wDM&s">
    </button>
</nav>

{#if showForm}
    <form action="/profile" method="POST">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name">
        </div>
        <div>
            <label for="start_date">Start date</label>
            <input type="date" id="start_date" name="start_date">
        </div>
        <div>
            <label for="end_date">End date</label>
            <input type="date" id="end_date" name="end_date">
        </div>
        <div>
            <label for="phonenumber">Phone number</label>
            <input type="tel" id="phonenumber" name="phonenumber">
        </div>
        <button type="submit">submit</button>
    </form>
{/if}

<style>
    nav {
        width: 100%;
        background-color: purple;
        padding: 12px 26px;
        display: flex;
        justify-content: end;
    }

    button {
        /* border-radius: 50%; */
    }

    img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
</style>
