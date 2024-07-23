type Props = {
  group_id: string;
  name: string;
  email: string;
}

export async function addToMailingList({ group_id, name, email }: Props) {
  try {
    const res = await fetch(`https://api.mailerlite.com/api/v2/groups/${group_id}/subscribers`, {
      method: 'POST',
      headers: {
        'X-MailerLite-ApiKey': import.meta.env.MAILERLITE_API_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        resubscribe: true,
      }),
    });
    console.log(await res.json());
    if (res.status !== 200) {
      return { success: false, message: "Something went wrong" };
    }
    return { success: true, message: "Successfully subscribed" };
  } catch {
    return { success: false, message: "An error occurred while subscribing to the group" };
  }
}
