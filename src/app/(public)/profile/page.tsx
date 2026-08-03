import { getMe } from "@/services/auth/getMe";
import Container from "@/components/shared/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LogoutButton from "@/components/shared/LogoutButton";
import FadeIn from "@/components/shared/fade-in";

const ProfilePage = async () => {
  const user = await getMe();

  if (!user?.success) {
    return (
      <FadeIn delay={0.5} direction="right">
        <Container>
          <div className="py-20 text-center">
            <h2 className="text-2xl font-semibold">Please login first.</h2>
          </div>
        </Container>
      </FadeIn>
    );
  }

  const profile = user.data;

  return (
    <section className="py-10">
      <Container>
        <Card className="mx-auto max-w-4xl shadow-md">
          <CardContent className="space-y-10 p-8">
            {/* Header - Slides down */}
            <FadeIn direction="down" delay={0.1}>
              <div className="flex flex-col items-center gap-6 border-b pb-8 md:flex-row">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={profile.profilePhoto || ""} />
                  <AvatarFallback className="text-4xl">
                    {profile.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="space-y-3">
                  <h1 className="text-4xl font-bold">{profile.name}</h1>

                  <div className="flex flex-wrap gap-2">
                    <Badge>{profile.role}</Badge>
                    <Badge variant="secondary">{profile.status}</Badge>
                  </div>

                  <p className="text-muted-foreground">{profile.email}</p>
                </div>
              </div>
            </FadeIn>

            {/* Personal Information - Slides in from left */}
            <FadeIn direction="left" delay={0.2}>
              <div>
                <h2 className="mb-5 text-xl font-semibold">
                  Personal Information
                </h2>

                <div className="grid gap-6 rounded-lg border p-6 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>

                    <p className="font-medium">{profile.name}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Email Address
                    </p>

                    <p className="font-medium">{profile.email}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Phone Number
                    </p>

                    <p className="font-medium">
                      {profile.phone || "Not Provided"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Profile Photo
                    </p>

                    <p className="font-medium break-all">
                      {profile.profilePhoto || "Not Provided"}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Account Information - Slides in from right */}
            <FadeIn direction="right" delay={0.3}>
              <div>
                <h2 className="mb-5 text-xl font-semibold">
                  Account Information
                </h2>

                <div className="grid gap-6 rounded-lg border p-6 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Role</p>

                    <p className="font-medium">{profile.role}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Account Status
                    </p>

                    <p className="font-medium">{profile.status}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Joined On</p>

                    <p className="font-medium">
                      {new Date(profile.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Last Updated
                    </p>

                    <p className="font-medium">
                      {new Date(profile.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Role Information - Slides up from bottom */}
            <FadeIn direction="up" delay={0.4}>
              <div>
                <h2 className="mb-5 text-xl font-semibold">Role Information</h2>

                <div className="rounded-lg border p-6">
                  {profile.role === "TENANT" && (
                    <>
                      <h3 className="mb-2 font-semibold">Tenant Account</h3>

                      <p className="text-muted-foreground">
                        You can browse rental properties, submit rental
                        requests, complete payments after approval, manage your
                        rentals, and submit reviews after successfully renting a
                        property.
                      </p>
                    </>
                  )}

                  {profile.role === "LANDLORD" && (
                    <>
                      <h3 className="mb-2 font-semibold">Landlord Account</h3>

                      <p className="text-muted-foreground">
                        You can create, edit, and manage property listings,
                        approve or reject rental requests, and manage your
                        rental business through your landlord dashboard.
                      </p>
                    </>
                  )}

                  {profile.role === "ADMIN" && (
                    <>
                      <h3 className="mb-2 font-semibold">Administrator</h3>

                      <p className="text-muted-foreground">
                        You have full administrative access to manage users,
                        properties, rental requests, and platform statistics.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </FadeIn>

            {/* Logout Action - Fades up smoothly at the end */}
            <FadeIn direction="up" delay={0.5}>
              <div className="flex justify-end border-t pt-6">
                <LogoutButton />
              </div>
            </FadeIn>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

export default ProfilePage;
