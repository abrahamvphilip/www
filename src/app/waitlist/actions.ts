'use server';

export async function subscribeAction(email: string) {
    try {
        const response = await fetch('https://hook.us2.make.com/trzcbp4h9io46rarv54b5rfg7nzbskxt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                source: 'aion.xyz'
            })
        });

        if (!response.ok) {
            throw new Error('Webhook call failed');
        }

        return { success: true };
    } catch (error) {
        console.error('Subscription error:', error);
        return { error: 'Failed to subscribe' };
    }
}
